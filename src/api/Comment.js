import axios from "axios";
const VERSION_V1 = '/v1/';
const COUNT = 15;

export const setComment = async (comment, type, id) => {
    return await axios.post(
        VERSION_V1
        + 'comment',
        {
            comment: comment,
            type: type,
            id: id
        },
        {
            headers: { Authorization : 'Bearer ' + localStorage.getItem('token')}
        }
    )
};

export const getComments = async (data = '', type, id) => {
    if (data) {
        return await axios.get(
            VERSION_V1
            + 'comments/type/'
            + data.type
            + '/id/'
            + data.id
            + '/count/'
            + COUNT
            + '?page='
            + data.page
        )
    }
    return await axios.get(
        VERSION_V1
        + 'comments/type/'
        + type
        + '/id/'
        + id
        + '/count/'
        + COUNT
    )

}