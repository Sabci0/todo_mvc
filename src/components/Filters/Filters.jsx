export function Filters({setFilters}) {
    return <div>
        <button onClick={() => setFilters('')}>All</button>
        <button onClick={() => setFilters(false)}>Active</button>
        <button onClick={() => setFilters(true)}>Completed</button>

    </div>;
}