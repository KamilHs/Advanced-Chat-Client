import { AxiosResponse } from "axios"
import axios from "../../core/axios"
import { IDialog } from "../../redux/types"

const dialogApi = {
    getAll: (): Promise<AxiosResponse<IDialog[]>> => axios.get<IDialog[]>("/dialogs")
}

export default dialogApi;

