function EpisodesFilter({ filters, setFilters }) {

    const handleFilterChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    }
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <input type="text" placeholder="Name" className="form-control mb-3" value={filters.name} name="name" onChange={handleFilterChange} />
                </div>

                <div className="col-6">
                    <input type="text" placeholder="Episode" className="form-control mb-3" value={filters.species} name="episode" onChange={handleFilterChange} />
                </div>
            </div>
        </>
    )
}
export default EpisodesFilter;