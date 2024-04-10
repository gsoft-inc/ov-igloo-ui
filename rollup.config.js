import path from "path";
import typescript from "rollup-plugin-typescript2";
import cleanup from "rollup-plugin-cleanup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import camelcase from "camelcase";
import alias from "@rollup/plugin-alias";

import autoprefixer from "autoprefixer";
import flexbugs from "postcss-flexbugs-fixes";

const SCOPE = "@igloo-ui";
const DIST = "./dist";
const FORMAT = "es";

function capitalize(string) {
    return camelcase(string, { pascalCase: true });
}

function handleName(name) {
    if (!name) {return null;}

    const componentName = name.replace(`${SCOPE}/`, "");

    const component = capitalize(componentName);
    const style = componentName;

    return {
        component,
        style
    };
}

function injectCssImport(file) {
    return {
        name: "plugin-css-import",
        renderChunk(code) {
            return {
                code: `import './${file}';\n${code}`,
                map: { mappings: "" }
            };
        }
    };
}

const providerPackageName = "@igloo-ui/provider";

export function createRollupConfig(packageName) {
    const { component, style } = handleName(packageName);

    const external = ["react"];
    if (packageName !== providerPackageName) {
        // @igloo-ui/provider uses a context that needs to be shared with other packages that uses it
        // as a peer dependency. So any package referencing @igloo-ui/provider should mark it as external,
        // except the provider itself.
        external.push(providerPackageName);
    }

    return {
        input: path.resolve(__dirname, `./src/${component}.tsx`),
        output: {
            file: path.resolve(DIST, `${component}.js`),
            format: FORMAT,
            name: component,
            sourcemap: true
        },
        external,
        plugins: [
            postcss({
                plugins: [autoprefixer(), flexbugs()],
                extract: path.resolve(DIST, `${style}.css`),
                minimize: true
            }),
            alias({
                entries: {
                    find: "@shared/components",
                    replacement: "../../../shared/components"
                }
            }),
            resolve(),
            json(),
            typescript({
                useTsconfigDeclarationDir: true,
                tsconfigOverride: {
                    exclude: ["**/*.stories.*", "**/*.test.*"]
                },
                clean: true,
                tsconfig: path.resolve(__dirname, "./tsconfig.json")
            }),
            commonjs({
                exclude: "node_modules",
                ignoreGlobal: true
            }),
            injectCssImport(`${style}.css`),
            cleanup({
                comments: "none",
                extensions: [".ts"]
            })
        ]
    };
}
