FROM frolvlad/alpine-glibc:latest

RUN apk update && \
    apk --update --no-cache add curl nodejs npm && \
    curl -fsSL https://deno.land/x/install/install.sh | sh && \
    /root/.deno/bin/deno upgrade --version 1.7.0

ENV PATH $PATH:./node_modules/.bin:/root/.deno/bin