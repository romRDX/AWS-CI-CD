import React from "react";

const Component2 = () => {

    const [filter,setFilter] = React.useState('');

    const debounce = (callback, wait) => {
        let timeoutId = null;
        return (...args) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
            callback.apply(null, args);
            }, wait);
        };
    }

    const handleType = (e) => {
        console.log("XXabc: ", e.target.value);
        setFilter(e.target.value);
    };

    const debouncedHandleType = debounce(handleType, 500);

    const list = [
        {
            id: 1,
            name: "red",
        },
        {
            id: 2,
            name: "yellow",
        },
        {
            id: 3,
            name: "blue",
        },
        {
            id: 4,
            name: "brown",
        },
        {
            id: 5,
            name: "pink",
        },
        {
            id: 6,
            name: "green",
        },
    ]

    const showList = React.useMemo(() => {
        return list.filter((listItem) => listItem.name.includes(filter));
    }, [filter]);

    return <div style={{ border: "2px solid blue", width: "500px", height: "fit-content"}}>
        <input placeholder="search" onChange={debouncedHandleType} />
        <div>
        { showList.map((item) => (
            <h3 key={item.id}>{item.name}</h3>
        ))}
        </div>
    </div>
}

export default Component2;