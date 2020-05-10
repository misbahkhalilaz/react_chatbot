var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer 16d5d8e304b34c0f97ef1fee0d135b97");

export default function post(query) {
	var raw = JSON.stringify({
		//contexts: ["shop"],
		lang: "en",
		query,
		sessionId: "12345",
		timezone: "GMT+5",
	});

	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};
	return fetch("https://api.dialogflow.com/v1/query?v=20150910", requestOptions)
		.then((res) => res.json())
		.then((res) =>
			res.status.code === 200
				? {
						query: res.result.resolvedQuery,
						resp: res.result.fulfillment.speech,
				  }
				: { query: "error", resp: res.status.code }
		);
	// .then((response) => response.text())
	// .then((result) => console.log(result))
	// .catch((error) => console.log("error", error));
}
