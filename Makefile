default: clean all

all:
	mkdir -p target
	handlebars src/templates/*.handlebars -f target/app.js
	cat src/ready.js >> target/app.js
	cp src/index.html target/
	cp src/sun.png target/
	cp src/style.css target/

clean:
	rm -rf target

deploy: clean all
	./bin/deploy
