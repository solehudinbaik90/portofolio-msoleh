import { useState } from "react";

const GoogleMap = () => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`google-map relative overflow-hidden ${
                open ? "h-[500px]" : "h-[100px]"
            }`}
        >
            {!open && (
                <div
                    className="map-opener absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center bg-grey-darken bg-opacity-90"
                    onClick={() => setOpen(true)}
                >
                    <span className="text-sm font-medium uppercase tracking-widest">
                        Buka Map
                    </span>
                </div>
            )}
            <iframe
                width="1920"
                height="500"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15868.838416887245!2d106.532609!3d-6.1024512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41ff38cdee3d79%3A0xa8ebc179ed208332!2sWarung%20Emak%20Ati!5e0!3m2!1sid!2sid!4v1783157829397!5m2!1sid!2sid"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
