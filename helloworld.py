import webapp2
import urllib
from google.appengine.api import urlfetch

basicAuth = "Basic bWFsdTEwMTg6eFFNd2F0WDZkanAxZEFfQ1MyUFpseTE2TEpOOFA4Z1NXS3E3elBqbGw2ZWx4US1kbnVkOUZn"


def IsNotNull(value):
    return value is not None and len(value) > 0


class MainPage(webapp2.RequestHandler):
    def get(self):
        url = self.request.get('url')
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.write(url)


class APIWrapper(webapp2.RequestHandler):
    def get(self):
        url = self.request.get('url')
        postbody = self.request.get('post')
        deletebody = self.request.get('delete')
        if IsNotNull(url):
            if IsNotNull(postbody):
                result = urlfetch.fetch(url, payload=postbody, method=urlfetch.POST,
                                        headers={"Authorization": basicAuth, "Content-Type": "application/json"})
            elif IsNotNull(deletebody):
                result = urlfetch.fetch(url, payload=deletebody, method=urlfetch.DELETE,
                                        headers={"Authorization": basicAuth, "Content-Type": "application/json"})
            else:
                result = urlfetch.fetch(url, headers={"Authorization": basicAuth})
            if result.status_code == 200:
                self.response.headers.add_header("Access-Control-Allow-Origin", "*")
                self.response.headers['Content-Type'] = 'application/json'
                self.response.write(result.content)
            else:
                self.response.headers.add_header("Access-Control-Allow-Origin", "*")
                self.response.headers['Content-Type'] = 'text/plain'
                self.response.write(str(result.status_code) + result.content)
        else:
            self.response.headers.add_header("Access-Control-Allow-Origin", "*")
            self.response.headers['Content-Type'] = 'text/plain'
            self.response.write("You need to add an url parameter")


application = webapp2.WSGIApplication([
                                          ('/', APIWrapper),
                                      ], debug=True)
