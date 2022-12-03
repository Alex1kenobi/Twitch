const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		message: null,
		logged: false,
		user: {},
		  roles: [],
		entrevistados: [],
		entrevistado: {},
		categories: [],
		preguntas_entrevistado: [],
		preguntas_perfil: [],
		message_response: null,
	  },
	  actions: {
		login: async (user) => {
		  try {
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
			  method: "POST",
			  headers: { "Content-Type": "application/json" },
			  body: JSON.stringify(user),
			});
			const data = await resp.json();
			if (data.token) {
			localStorage.setItem("token", data.token);
			}
			setStore({ logged: data.logged, user: data.user, message:data.msg });
			// don't forget to return something, that is how the async resolves
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
  
		verify: async () => {
		  try {
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/api/verify", {
			  method: "GET",
			  headers: {
				  "Content-Type": "application/json",
				  Authorization: "Bearer " + localStorage.getItem("token"),
				},
  
			});
			const data = await resp.json();
			setStore({ logged: data.logged, user: data.user });
			// don't forget to return something, that is how the async resolves
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
  
		register: async (user) => {
		  try {
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
			  method: "POST",
			  headers: { "Content-Type": "application/json" },
			  body: JSON.stringify(user),
			});
			const data = await resp.json();
			localStorage.setItem("token", data.token);
			setStore({ logged: data.logged, user: data.user });
			// don't forget to return something, that is how the async resolves
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
  
		getroles: async () => {
		  try {
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/api/roles", {
			  method: "GET",
			  headers: {
				  "Content-Type": "application/json",
				},
  
			});
			const data = await resp.json();
			setStore({ roles: data.Roles });
			// don't forget to return something, that is how the async resolves
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
  
		getEntrevistados: async () => {
		  try {
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/api/entrevistados", {
			  method: "GET",
			  headers: {
				  "Content-Type": "application/json",
				},
  
			});
			const data = await resp.json();
			setStore({ entrevistados: data.Entrevistados });
			// don't forget to return something, that is how the async resolves
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
  
		getEntrevistado: async (id) => {
		  try {
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/api/entrevistados/"+id, {
			  method: "GET",
			  headers: {
				  "Content-Type": "application/json",
				},
  
			});
			const data = await resp.json();
			setStore({ entrevistado: data.Entrevistado, preguntas_entrevistado: data.Entrevistado.questions});
		 	
		// don't forget to return something, that is how the async resolves
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
  
		getcategories: async () => {
		  try {
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/api/category", {
			  method: "GET",
			  headers: {
				  "Content-Type": "application/json",
				},
  
			});
			const data = await resp.json();
			setStore({ categories: data.Categories });
			// don't forget to return something, that is how the async resolves
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
  
  
		preguntas: async (interviewer, text, selectcategory) => {
		  try {
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/api/preguntas", {
			  method: "POST",
			  headers: { "Content-Type": "application/json",Authorization: "Bearer " + localStorage.getItem("token"),},
  
			  body: JSON.stringify({interviewer_id: interviewer, text: text, category_id: selectcategory}),
			});
			const data = await resp.json();
			
			setStore({ message_response:data.message });
		getActions().getEntrevistado(data.question.interviewer_id)
		// don't forget to return something, that is how the async resolves
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
  
		getPreguntasPerfil: async () => {
		 
			// fetching data from the backend
			const resp = await fetch(process.env.BACKEND_URL + "/api/preguntas/perfil/", { // +id es lo que está en el routes línea 108, pero con otra nomenclatura
			  method: "GET",
			  headers: {
				  "Content-Type": "application/json",
				  Authorization: "Bearer " + localStorage.getItem("token"),
				},
  
			});
			const data = await resp.json();
			
			const store = await setStore({ preguntas_perfil: data.Preguntas }); // "preguntas": esto tiene que ser igual a lo que hay entre comillas del Jsonify de la 111 del routes
			console.log (store, "@@@@@@@2!!!!!!")
			// don't forget to return something, that is how the async resolves
		 
		},
  
		logout: () => {
		  localStorage.clear();
		  setStore({
			logged: false,
			user: {},
		  });
		},
	  },
	};
  };
  
  export default getState;
  