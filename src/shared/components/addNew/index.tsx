import { Button } from "antd";
import { Icons } from "../../constants/icon/icons";

const AddNew = () => {
    return (
        <Button>
            <span>
                <Icons.plusIcon />
            </span>
            <span>ADD NEW</span>
        </Button>
    );
};

export default AddNew;
