const axios = require("axios");

const controlador = {

    // Obtener noticias por palabra clave
    mostrarNoticias: async (req, res) => {
        let search = req.query.search;
      
        let url = `http://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.API_KEY}`;
        const filter_news = await axios.get(url);
      
        res.render("resultados", { articles: filter_news.data.articles });
    }
}

// Exportar
module.exports = controlador;