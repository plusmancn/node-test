from locust import HttpLocust, TaskSet

def single(l):
    l.client.get(":9000/")

def cluster(l):
    l.client.get(":8000/")

class UserBehavior(TaskSet):
    def on_start(self):
        single(self)

class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait=5000
    max_wait=9000