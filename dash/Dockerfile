FROM python:3.11-alpine as builder

RUN sed -i 's/https:\/\/dl-cdn.alpinelinux.org/http:\/\/dl-cdn.alpinelinux.org/g' /etc/apk/repositories && \
    apk update && apk add --no-cache ca-certificates bash nano g++

COPY ./requirements.txt /vampi/requirements.txt
WORKDIR /vampi
RUN pip install -r requirements.txt

FROM python:3.11-alpine
COPY . /vampi
WORKDIR /vampi

COPY --from=builder /usr/local/lib /usr/local/lib
COPY --from=builder /usr/local/bin /usr/local/bin

ENV vulnerable=1
ENV tokentimetolive=60

ENTRYPOINT ["python"]
CMD ["app.py"]

