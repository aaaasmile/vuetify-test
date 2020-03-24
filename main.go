package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/aaaasmile/vuetify-test/web"
	"github.com/aaaasmile/vuetify-test/web/idl"
)

func main() {
	var ver = flag.Bool("ver", false, "Prints the current version")
	var configfile = flag.String("config", "config.toml", "Configuration file path")
	flag.Parse()

	if *ver {
		fmt.Printf("%s, version: %s", idl.Appname, idl.Buildnr)
		os.Exit(0)
	}

	web.RunService(*configfile)
}
