import {
    INFO_REQUEST,
    INFO_SUCCESS,
    INFO_FAIL
} from './Constants'

export const InfoAction = (
    Date,
    OrderType,
    Country
) => async (dispatch) => {
    try {
        dispatch({
            type: INFO_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            "http://127.0.0.1:8081/api/contacts",
            {
                Date,
                OrderType,
                Country
            },
            config,
        );
        dispatch({
            type: INFO_SUCCESS,
            payload: data,
        });
        localStorage.setItem("Info", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: INFO_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};