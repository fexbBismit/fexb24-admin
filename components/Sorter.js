import React from "react";

const Sorter = ({ setSortBy, setIsFetching }) => {

    function sort() {
        var radioBtn = document.getElementById('sorter')
        if (radioBtn.checked) {
            setSortBy(true)
            console.log('wab')
        } else {
            setSortBy(false)
            console.log('ah')
        }
        setIsFetching(true)
    }

    return (
        <div id="sorter">
            <div className="box-purple px-2 md:px-4 py-1.5 md:py-2.5 space-x-1 md:space-x-2 flex">
                <span className="text-2xs md:text-sm font-semibold md:font-medium">Sort by:</span>
                <span className="text-2xs md:text-sm font-semibold">Newest</span>
                <label for="sorter" className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" id="sorter" className="sr-only peer" onClick={() => sort()}/>
                    <div className="w-8 h-4 bg-white rounded-full peer dark:bg-purple peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[0px] after:bg-white after:border-purple after:border-2 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:border-purple"></div>
                </label>
                <span className="text-2xs md:text-sm font-semibold">Oldest</span>
            </div>
        </div>
    )
}

export default Sorter;