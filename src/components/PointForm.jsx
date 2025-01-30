import React from "react";

const PointForm = () => {
    return (
        <form>
        <label className="text-7xl">
            Start Point:
            <input type="text" name="start" />
        </label>
        <label>
            End Point:
            <input type="text" name="end" />
        </label>
        <button type="submit">Submit</button>
        </form>
    );
};


export default PointForm;