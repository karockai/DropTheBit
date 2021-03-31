FROM python:3.9
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt /app/requirements.txt
COPY realTimeData.py /app/realTimeData.py
COPY coinName.py /app/coinName.py
RUN pip install -r requirements.txt

CMD python realTimeData.py