"""
Noten Datenbank Endpoint using Google Cloud Endpoints

Hier sind die ProtoRPC Nachrichten definiert
"""

import endpoints
from protorpc import messages
from protorpc import message_types
from protorpc import remote

package = 'rubbs.pc.noten'


class Composer(messages.Message):
    name = messages.StringField(1, required=True)
    birthday = message_types.DateTimeField(2)
    dayOfDeath = message_types.DateTimeField(3)

class ComposerCollection(messages.Message):
    items = messages.MessageField(Composer, 1, repeated=True)


STORED_COMPOSERS = ComposerCollection(items=[
    Composer(name='Mozart'),
    Composer(name='Bach')
])



"""
API code
"""

@endpoints.api(name='composer', version='v1')
class ComposerApi(remote.Service):
    """ Composer Api """

    # endpoint method to list available composers (GET)
    @endpoints.method(message_types.VoidMessage, ComposerCollection,
            path='composer',
            http_method='GET',
            name='composer.list'
            )

    def composer_list(self, unused_request):
        return STORED_COMPOSERS



    # endpoint method to get special composer (GET)
    GET_RESOURCE = endpoints.ResourceContainer(
      message_types.VoidMessage,
      id=messages.StringField(1, variant=messages.Variant.STRING, required=True))

    @endpoints.method(GET_RESOURCE, Composer,
            path='composer/{id}',
            http_method='GET',
            name='composer.get'
            )

    def composer_get(self, request):

        for composer in STORED_COMPOSERS.items:
            #return composer
            if request.id in composer.name:
                return composer
        raise endpoints.NotFoundException('Composer %s not found' % (request.id))


    # endpoint method to add new composer (POST)
    ADD_RESOURCE = endpoints.ResourceContainer(Composer)
    @endpoints.method(ADD_RESOURCE, Composer,
            path='composer',
            http_method='POST',
            name='composer.add')

    def composer_add(self, request):
        c = Composer(name=request.name, birthday=request.birthday, dayOfDeath=request.dayOfDeath)
        return c
        #TODO datastore access

    # endpoint method to update user (PUT)
    PUT_RESOURCE = endpoints.ResourceContainer(Composer, id=messages.StringField(1, variant=messages.Variant.STRING, required=True))
    @endpoints.method(PUT_RESOURCE, Composer,
            http_method='PUT',
            path='composer/{id}',
            name='composer.update')

    def composer_update(self, request):
        #TODO find user in datastore and update its values

        for composer in STORED_COMPOSERS.items:
            #return composer
            if request.id in composer.name:
                return composer
        raise endpoints.NotFoundException('Composer %s not found' % (request.id))


    # endpoint method to delete composer
    @endpoints.method(GET_RESOURCE, message_types.VoidMessage,
            http_method='DELETE',
            path='composer/{id}',
            name='composer.delete')

    def composer_delete(self, request):
        #TODO find composer and delete from datastore
        for composer in STORED_COMPOSERS.items:
            #return composer
            if request.id in composer.name:
                return composer
        raise endpoints.NotFoundException('Composer %s not found' % (request.id))


APPLICATION = endpoints.api_server([ComposerApi])
