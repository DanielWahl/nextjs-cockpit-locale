class Fetch {
    async fetchPage(name, locale) {
        return await fetch(
            process.env.API +
                `/pages/page?route=${name}&locale=${locale}&populate=10`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": process.env.TOKEN,
                },
            },
        )
            .then((res) => res.json())
            .then((res) => {
                //console.log("FetchPage: " + name + " - " + locale + " : ", res);
                return res;
            })
            .catch((err) => console.error(err));
    }

    async getAllNews(locale) {
        return await fetch(
            process.env.API +
                `/content/items/news?populate=1&locale=${locale}&sort={_created:'-1'}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": process.env.TOKEN,
                },
            },
        )
            .then((res) => res.json())
            .then((res) => {
                //console.log("getVolunteerPosition: ", res);
                return res;
            })
            .catch((err) => console.error(err));
    }

    async getNews(locale, slug) {
        return await fetch(
            process.env.API +
                `/content/item/news?populate=1&locale=${locale}&filter={slug:'${slug}'}&sort={_created:'-1'}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": process.env.TOKEN,
                },
            },
        )
            .then((res) => res.json())
            .then((res) => {
                return res;
            })
            .catch((err) => console.error(err));
    }

    async postForm(formToken, data, setSendSuccessful, setSendError) {
        await fetch(process.env.API + "/inbox/submit/" + formToken, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.TOKEN,
            },
            body: JSON.stringify({
                data,
            }),
        })
            .then((entry) => {
                //console.log(entry);
                if (entry.ok) {
                    setSendSuccessful(true);
                } else {
                    setSendError(true);
                }
            })
            .catch((entry) => {
                console.error(entry);
                setSendSuccessful(false);
                setSendError(true);
            });
    }
}

export default new Fetch();
