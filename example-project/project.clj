(defproject  chat "0.0.1"
  :min-lein-version "2.8.3" 
  :dependencies [[org.clojure/clojure "1.10.0"]  
                 [stigmergy/wocket "0.1.5-SNAPSHOT"]     
                 [org.clojure/clojurescript "1.10.520"]
                 [compojure "1.6.1"]
                 [reagent "0.8.1"]
                 ]

  :plugins [[lein-figwheel "0.5.18"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"                                                                                 :target-path]


  
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"]
                :figwheel {:on-jsload "chat.jsload"}
                :compiler {:main chat.init
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/chat.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/compiled/chat.min.js"
                           :optimizations :advanced}}]}
  
  :profiles {:project/dev {:dependencies [[binaryage/devtools "0.9.10"]
                                          [figwheel-sidecar "0.5.18"]
                                          [cider/piggieback "0.4.0"]]
                           :source-paths ["src/cljs" "src/clj"] 
                           }
             :project/prod {:prep-tasks ["compile" ["cljsbuild" "once" "min"]]
                            :source-paths ["src/cljs" "src/clj"]
                            :aot :all}

             :dev [:project/dev]
             :uberjar [:project/prod]
             }

  )
