import Search from '@igloo-ui/icons/dist/Search';

export default function IconsOptions({
  search,
  searchOnChange,
  sizeOnChange,
  size,
}) {
  return (
    <div className="io-options">
      <div className="io-options__search">
        <div className="io-input">
          <Search size="small" />
          <input
            placeholder="Search icons..."
            type="text"
            value={search}
            onChange={searchOnChange}
          />
        </div>
      </div>
      <div className="io-options__sizes">
        <div className="io-btn-group">
          <input
            className="io-btn-check"
            onChange={sizeOnChange}
            type="radio"
            id="16"
            value="small"
            name="size"
            checked={size === 'small'}
          />
          <label htmlFor="16">16px</label>
          <input
            className="io-btn-check"
            onChange={sizeOnChange}
            type="radio"
            id="24"
            value="medium"
            name="size"
            checked={size === 'medium'}
          />
          <label htmlFor="24">24px</label>
          <input
            className="io-btn-check"
            onChange={sizeOnChange}
            type="radio"
            id="32"
            value="large"
            name="size"
            checked={size === 'large'}
          />
          <label htmlFor="32">32px</label>
        </div>
      </div>
    </div>
  );
}
