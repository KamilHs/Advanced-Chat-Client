import { AxiosResponse } from "axios"
import axios from "../../core/axios"
import { IMessage } from "../../redux/types"

const messagesApi = {
    getAllMessagesById: (id: string | null): Promise<AxiosResponse<IMessage[]>> => axios.get<IMessage[]>(`/messages?dialog_id=${id}`)
}

export default messagesApi;

