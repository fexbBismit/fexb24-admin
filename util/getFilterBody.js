function getFilterBody(sortBy, filter, searchBy, searchInput) {
    var body = {
        "sort": {
            "by": [
                {"field": "createdAt", "order": (sortBy?'ASC':'DESC')}
            ]
        },
    }
    if (filter !== 'Any') {
        body["filter"] = {
            "by": "payment-status",
            "value": filter.toLowerCase()
        }
    }
    if (searchInput !== '') {
        body["search"] = {
            "by": searchBy,
            "value": searchInput
        }
    }
    
    console.log(body)
    return body
}

export default getFilterBody