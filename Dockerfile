# Copyright (c) 2022 David Chan
#
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT

FROM --platform=linux/amd64 python:3.10-alpine
COPY ./requirements.txt /app/requirements.txt

WORKDIR /app
RUN pip install -r requirements.txt

COPY ./flaskapp /app

EXPOSE 8000
CMD [ "gunicorn", "-w", "2", "-b", "0.0.0.0:8000", "run:app" ]
