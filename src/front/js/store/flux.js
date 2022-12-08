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
      preguntas_current_user: [],
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
          setStore({
            logged: data.logged,
            user: data.user,
            message: data.msg,
            preguntas_current_user: data.user.questions,
          });
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
          setStore({
            logged: data.logged,
            user: data.user,
            preguntas_current_user: data.user.questions,
          });
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
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/entrevistados",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
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
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/entrevistados/" + id,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await resp.json();
          setStore({
            entrevistado: data.Entrevistado,
            preguntas_entrevistado: data.Entrevistado.questions,
          });

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
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },

            body: JSON.stringify({
              interviewer_id: interviewer,
              text: text,
              category_id: selectcategory,
            }),
          });
          const data = await resp.json();

          setStore({ message_response: data.message });
          getActions().getEntrevistado(data.question.interviewer_id);
          // don't forget to return something, that is how the async resolves
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

     
      deletequestion: async (id, interviewer_id) => {
          try {
          console.log("allaaaaaaa")
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/deletequestion",{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({id:id}),
          });
          const data = await resp.json();
          console.log("volandoooooo")

getActions().getEntrevistado(interviewer_id)
          setStore({
            message: data.message,
           
          });
          // don't forget to return something, that is how the async resolves
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },


      editUser: async (user) => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/edituser", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(user),
          });
          const data = await resp.json();

          setStore({
            user: data.user,
            message: data.message,
          });
          // don't forget to return something, that is how the async resolves
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
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
