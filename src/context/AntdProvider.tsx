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
                    Checkbox: {
                        colorBorder: "#7c6fd6",
                        colorPrimaryHover:"#9988ee"
                    }
                    
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default AntdProvider;
