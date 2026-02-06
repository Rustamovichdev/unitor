import { ConfigProvider } from "antd";
import type { FC, ReactNode } from "react";

interface AntdConfigProviderProps {
    children: ReactNode;
}

const AntdProvider: FC<AntdConfigProviderProps> = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: { colorPrimary: "#343734", borderRadius: 8 },
                components: {
                    Button: {
                        paddingInline: 30,
                        paddingBlock: 10,
                        borderRadius: 20,
                        defaultBg: "#343734",

                    },
                    Card:{}
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default AntdProvider;
