const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: "",
			activUser: null
		},
		actions: {
			setActivUser: id => setStore({ activUser: id }),

			setToken: tk => setStore({ token: tk }),

			addUser: (email, password) => {
				fetch(process.env.BACKEND_URL + "/signup", {
					method: "POST",
					body: JSON.stringify({ email: email, password: password }),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(res => ("error" in res ? alert(res["error"]) : alert("user signed ok")))
					.catch(error => console.log(error));
			},

			login: (email, password) => {
				// Llamada a /login para obtener el token
				fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					body: JSON.stringify({ email: email, password: password }),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(res => {
						"error" in res ? alert(res["error"]) : alert("user logged ok");
						if (res.token) setStore({ token: res.token, activUser: res.user_id });
					})
					.catch(error => console.error("Error: ", error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
