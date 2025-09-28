function SortOptions({ sortKey, sortOrder, onSortChange }) {
  return (
    <div>
      <label>
        Sort by:
        <select value={sortKey} onChange={e => onSortChange(e.target.value, sortOrder)}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </label>
      <label>
        Order:
        <select value={sortOrder} onChange={e => onSortChange(sortKey, e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
}

export default SortOptions;
