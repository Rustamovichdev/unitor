import { Table, type TableProps } from "antd";
import type { FC } from "react";
import { members, type Imembers } from "../../constants/members/index";
 

const TableComp: FC = () => {
    const columns: TableProps<Imembers>["columns"] = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "time",
            dataIndex: "time",
            key: "time",
        },
    ];

    return (
        <>
            <Table<Imembers> columns={columns} dataSource={members} />;
        </>
    );
};
export default TableComp;
