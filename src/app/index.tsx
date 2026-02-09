

import type { FC } from "react";

import { Link } from "react-router-dom";
import menuData from "../context/menuData";

const App: FC = () => {
    return (
        <>
            <main>
                <section>
                    <div>
                        {/* icon */}

                    </div>
                    <div>
                        {menuData.map((item) => (
                            <Link key={item.id} to={item.path}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <div>
                        {/* logout */}
                    </div>
                </section>
                <section>

                </section>
            </main>
        </>
    );
};

export default App;
