import * as React from 'react';

import cx from 'classnames';

import * as variables from '@igloo-ui/tokens/dist/base10/tokens.json';

import './team-color-icon.scss';

export type Size = 'small' | 'medium' | 'large' | 'xlarge';

export interface TeamColorIconProps extends React.ComponentProps<'div'> {
  /** The content of the team color icon */
  children?: React.ReactNode;
  /** Add a specific class to the team color icon */
  className?: string;
  /** The background color of the team icon */
  teamColor?: string;
  /** Specifies the size of the team icon */
  size?: Size;
  /** Specifies the id of the color tag,
   * if the team color properties is empty,
   * we will calculate the color with the id. */
  teamId?: string;
  /** Sepcifies the name of the team color,
   * we will create the letter composition with it */
  teamName?: string;
}

const TeamColorIcon: React.FunctionComponent<TeamColorIconProps> = ({
  children,
  className,
  teamColor,
  size = 'small',
  teamId,
  teamName,
}) => {
  const classes = cx(
    'ids-team-color-icon',
    `ids-team-color-icon--${size}`,
    className
  );
  const allOrganisationId = '00000000-0000-0000-0000-000000000000';
  const allOrganisationColor = variables.grey500;
  const Colors = [
    variables.creamsicle150,
    variables.electricBlue700,
    variables.coral200,
    variables.electricBlue200,
    variables.coral800,
    variables.sky100,
    variables.dandelion300,
    variables.electricBlue400,
  ];
  const TeamColorToTextColorMapping: Map<string, string> = new Map();
  TeamColorToTextColorMapping.set(variables.creamsicle150, variables.coral900);
  TeamColorToTextColorMapping.set(
    variables.electricBlue700,
    variables.electricBlue50
  );
  TeamColorToTextColorMapping.set(variables.coral200, variables.coral900);
  TeamColorToTextColorMapping.set(
    variables.electricBlue200,
    variables.electricBlue800
  );
  TeamColorToTextColorMapping.set(variables.coral800, variables.coral50);
  TeamColorToTextColorMapping.set(variables.sky100, variables.electricBlue800);
  TeamColorToTextColorMapping.set(
    variables.electricBlue400,
    variables.coral900
  );
  TeamColorToTextColorMapping.set(
    variables.dandelion300,
    variables.electricBlue50
  );
  TeamColorToTextColorMapping.set(variables.grey500, variables.samoyed);

  const hashCode = (text: string): number => {
    let hash = 0;

    if (!text || text.length === 0) {
      return hash;
    }

    for (let i = 0; i < text.length; i += 1) {
      hash = Math.imul(31, hash) + text.charCodeAt(i);
    }

    return Math.abs(hash);
  };

  const getColorFromId = (teamId: string): string => {
    if (teamId === allOrganisationId) {
      return allOrganisationColor;
    }

    const result = hashCode(teamId);

    return Colors[result % Colors.length];
  };

  const backgroundColor = teamColor || getColorFromId(teamId ?? '');
  const color = TeamColorToTextColorMapping.get(backgroundColor);

  const tagFromName = React.useMemo(() => {
    if (!teamName) {
      return null;
    }

    let tag = '';
    const splitName = teamName.trim().split(' ');

    // If only one word, take the first 2 characters
    if (splitName.length === 1) {
      tag = splitName[0].slice(0, 2);
    }
    // If more than 1 word, take the first word's first character
    // then take the next first character of a segment who is alphadecimal
    else if (splitName.length > 1) {
      tag = splitName[0].slice(0, 1);
      for (let i = 1; i < splitName.length; i += 1) {
        const firstLetterOrSegment = splitName[i].slice(0, 1);
        if (firstLetterOrSegment.match(/\w/)) {
          tag += firstLetterOrSegment;

          break;
        }
      }

      if (tag.length < 2) {
        tag = splitName[0].slice(0, 2);
      }
    }
    // Only take the first letter if its size is small or medium
    if (size === 'small' || size === 'medium') {
      tag = tag.charAt(0);
    }

    return tag;
  }, [teamName, size]);

  return (
    <div className={classes} style={{ backgroundColor, color }}>
      {children || tagFromName}
    </div>
  );
};

export default TeamColorIcon;
