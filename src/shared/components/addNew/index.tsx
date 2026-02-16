import { Button } from "antd";
import { Icons } from "../../constants/icon/icons";
import { useState } from "react";
import AddMember from "../Drower";

const AddNew = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Button onClick={() => setOpen(true)}>
                <span>
                    <Icons.plusIcon />
                </span>
                <span>ADD NEW</span>
            </Button>
            <section>
                {open && <AddMember open={open} setOpen={setOpen} />}
            </section>
        </>
    );
};

export default AddNew;
