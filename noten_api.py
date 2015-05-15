"""
Noten Datenbank Endpoint using Google Cloud Endpoints

Hier sind die ProtoRPC Nachrichten definiert
"""

import endpoints
from protorpc import remote

# datastore access
from google.appengine.ext import ndb

from endpoints_proto_datastore.ndb import EndpointsModel

package = 'rubbs.pc.noten'

class Composer(EndpointsModel):
    _message_fields_schema = ('id', 'name', 'birthday', 'dayOfDeath', 'created')
    name = ndb.StringProperty()
    birthday = ndb.DateTimeProperty()
    dayOfDeath = ndb.DateTimeProperty()
    created = ndb.DateTimeProperty(auto_now_add=True)

class Book(EndpointsModel):
    _message_fields_schema = ('id', 'name', 'publisher', 'isbn', 'year', 'created')
    name = ndb.StringProperty()
    publisher = ndb.StringProperty()
    isbn = ndb.StringProperty()
    year = ndb.IntegerProperty()
    created = ndb.DateTimeProperty(auto_now_add=True)

class Song(EndpointsModel):
    _message_fields_schema = ('id', 'name', 'style', 'book', 'page', 'composer', 'created')

    name = ndb.StringProperty()
    style = ndb.StringProperty()

    # properties for book
    book = ndb.KeyProperty()
    page = ndb.IntegerProperty()
    composer = ndb.KeyProperty()
    created = ndb.DateTimeProperty(auto_now_add=True)


"""
API code
"""

@endpoints.api(name='composer', version='v1')
class ComposerApi(remote.Service):

    """ Composer Api """
    @Composer.method(path='composer', name='composer.add')
    def addComposer(self, comp):
        comp.put()
        return comp

    @Composer.query_method(query_fields=('name',), path='composer', name='composer.get')
    def getComposer(self, query):
        return query

    @Composer.method( path='composer/{id}', http_method='DELETE', name='composer.delete', response_fields=())
    def deleteComposer(self, object):
        object.key.delete()
        return object


    """ Book API """
    @Book.method(path='book', name='book.add')
    def addBook(self, book):
        book.put()
        return book

    @Book.query_method(query_fields=('name','year'), path='book', name='book.get')
    def getBook(self, query):
        return query

    @Book.method( path='book/{id}', http_method='DELETE', name='book.delete', response_fields=())
    def deleteComposer(self, object):
        object.key.delete()
        return object


    """ Song API """
    @Song.method(path='song', name='song.add')
    def addSong(self, song):
        song.put()
        return song

    @Song.query_method (query_fields=('name', 'type', 'book'), path='song', name='song.get')
    def getSong(self, query):
        return query

    @Song.method( path='song/{id}', http_method='DELETE', name='song.delete', response_fields=())
    def deleteComposer(self, object):
        object.key.delete()
        return object


APPLICATION = endpoints.api_server([ComposerApi])
