import { uuid } from 'uuidv4';
import {
    Car,
    Debt,
    Customer,
    Supplier,
    Content,
    Decentralization,
    Driver,
    OrderIcon,
    Staff,

} from "../../../../../asstes/icons";


export const dataSider = [
    {
        id: uuid(),
        title: "Đơn hàng",
        subTitle: "Lorem",
        icon: <OrderIcon />,
    },
    {
        id: uuid(),
        title: "Danh sách xe",
        subTitle: "Lorem",
        icon: <Car />,
    },
    {
        id: uuid(),
        title: "Khách hàng",
        subTitle: "Lorem",
        icon: <Customer />,
    },
    {
        id: uuid(),
        title: "Nhà cung cấp",
        subTitle: "Lorem",
        icon: <Supplier />,
    },
    {
        id: uuid(),
        title: "Công nợ",
        subTitle: "Lorem",
        icon: <Debt />,
    },
    {
        id: uuid(),
        title: "Nội dung",
        subTitle: "Lorem",
        icon: <Content />,
    },
    {
        id: uuid(),
        title: "Tài xế",
        subTitle: "Lorem",
        icon: <Driver />,
    },
    {
        id: uuid(),
        title: "Nhân viên",
        subTitle: "Lorem",
        icon: <Staff />,
    },
    {
        id: uuid(),
        title: "Phân quyền",
        subTitle: "Lorem",
        icon: <Decentralization />,
    },
]
