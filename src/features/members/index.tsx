import type { FC } from "react";
import SearchSide from "../../shared/components/search";
import AddNew from "../../shared/components/addNew";
import TableComp from "../../shared/components/Table";

const Members: FC = () => {
    return (
        <section>
            <div className="flex justify-between">
                <SearchSide />
                <div>
                    <AddNew />

                </div>
                
            </div>
            <div>
                    <TableComp />
                </div>
        </section>
    );
};
export default Members;
