const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "content-type": "application-json",
        };
    }

    //if we have the token, send it)
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
        options.headers = {
            ...options.headers,
            "X-Authorization": accessToken,
        };
    }

    return options;
};

const request = async (method, url, data) => {
    const response = await fetch(url, {
        /* return an object which is destructured immediately */
        ...buildOptions(data),
        method,
    });

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

/* Partial application */
export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
export const patch = request.bind(null, "PATCH");
