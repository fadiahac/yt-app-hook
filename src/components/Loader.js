import React, {useState} from "react";

const Loader = () => {
    const [loaderClass, setLoaderClass] = useState('');

    return (
        <div className={`ui ${loaderClass} dimmer`}>
            <div className="ui text loader">Loading</div>
        </div>
    );
};

export default Loader;