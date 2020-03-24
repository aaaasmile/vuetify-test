package app

import (
	"log"
	"net/http"
	"net/url"
	"text/template"

	"github.com/aaaasmile/vuetify-test/conf"
	"github.com/aaaasmile/vuetify-test/web/idl"
)

type PageCtx struct {
	RootUrl string
	Buildnr string
}

func APiHandler(w http.ResponseWriter, req *http.Request) {
	var err error
	switch req.Method {
	case "GET":
		err = handleGet(w, req)
	case "POST":
		log.Println("POST on ", req.RequestURI)
	}
	if err != nil {
		log.Println("Error on process request: ", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
	}
}

func handleGet(w http.ResponseWriter, req *http.Request) error {
	u, _ := url.Parse(req.RequestURI)
	log.Println("GET requested ", u)

	pagectx := PageCtx{
		RootUrl: conf.Current.RootURLPattern,
		Buildnr: idl.Buildnr,
	}
	templName := "templates/vue/index.html"

	tmplIndex := template.Must(template.New("AppIndex").ParseFiles(templName))

	err := tmplIndex.ExecuteTemplate(w, "base", pagectx)
	if err != nil {
		return err
	}

	return nil
}
