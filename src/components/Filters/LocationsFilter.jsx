function LocationsFilter({ filters, setFilters }) {

    const handleFilterChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    }
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <input type="text" placeholder="Name" className="form-control mb-3" value={filters.name} name="name" onChange={handleFilterChange} />
                </div>

                <div className="col-4">
                    <input type="text" placeholder="Type" className="form-control mb-3" value={filters.type} name="type" onChange={handleFilterChange} />
                </div>

                <div className="col-4">
                    <input type="text" placeholder="Dimension" className="form-control mb-3" value={filters.species} name="dimension" onChange={handleFilterChange} />
                </div>
            </div>
        </>
    )
}
export default LocationsFilter;