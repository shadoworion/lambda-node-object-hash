FROM public.ecr.aws/lambda/nodejs:22-arm64

RUN dnf upgrade -y && \
    dnf install -y gcc-c++ make python3 gzip tar unzip

WORKDIR ${LAMBDA_TASK_ROOT}

COPY . .

RUN npm install

CMD [ "dist/task.handler" ]