import { uuid } from 'uuidv4';
import {
    Car,
    CongNo,
    KhachHang,
    NhaCungCap,
    NoiDung,
    PhanQuyen,
    TaiXe,
    DonHang,
    NhanVien
} from "../../../../../asstes/icons";


export const dataSider = [
    {
        id: uuid(),
        title: "Đơn hàng",
        subTitle: "Lorem",
        icon: <DonHang />,
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
        icon: <KhachHang />,
    },
    {
        id: uuid(),
        title: "Nhà cung cấp",
        subTitle: "Lorem",
        icon: <NhaCungCap />,
    },
    {
        id: uuid(),
        title: "Công nợ",
        subTitle: "Lorem",
        icon: <CongNo />,
    },
    {
        id: uuid(),
        title: "Nội dung",
        subTitle: "Lorem",
        icon: <NoiDung />,
    },
    {
        id: uuid(),
        title: "Tài xế",
        subTitle: "Lorem",
        icon: <TaiXe />,
    },
    {
        id: uuid(),
        title: "Nhân viên",
        subTitle: "Lorem",
        icon: <NhanVien />,
    },
    {
        id: uuid(),
        title: "Phân quyền",
        subTitle: "Lorem",
        icon: <PhanQuyen />,
    },
]
