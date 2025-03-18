import { Result } from "antd"

const Notfound = () => {
    return <Result
        status={404}
        title="Halaman yang di cari tidak ditemukan"
        subTitle={'page not found'}

    />
}
export default Notfound