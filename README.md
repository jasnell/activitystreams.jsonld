An experimental JSON-LD Context Definition for Activity Streams 2.0

License: Apache v2.0


Example use: 

```json
{
  "@context": "https://w3id.org/activity-streams/v2",
  "verb": "post",
  "actor": "acct:joe@example.org",
  "object": "http://example.org/posts/1",
  "updated": "2014-12-12T12:12:12.123Z"
}
```

Which yields:

```json
[
  {
    "http://activitystrea.ms/2.0/actor": [
      {
        "@id": "acct:joe@example.org"
      }
    ],
    "http://activitystrea.ms/2.0/object": [
      {
        "@id": "http://example.org/posts/1"
      }
    ],
    "http://activitystrea.ms/2.0/updated": [
      {
        "@type": "xsd:dateTime",
        "@value": "2014-12-12T12:12:12.123Z"
      }
    ],
    "http://activitystrea.ms/2.0/verb": [
      {
        "@value": "post"
      }
    ]
  }
]
```

And further:

```
_:b0 <http://activitystrea.ms/2.0/actor> <acct:joe@example.org> .
_:b0 <http://activitystrea.ms/2.0/object> <http://example.org/posts/1> .
_:b0 <http://activitystrea.ms/2.0/updated> "2014-12-12T12:12:12.123Z"^^<xsd:dateTime> .
_:b0 <http://activitystrea.ms/2.0/verb> "post" .
```

There are a few gotchas:

1. The Activity Streams 2.0 "objectType" property is roughly equivalent to the JSON-LD "@type" property. However, "objectType" cannot be mapped directly to "@type" in the context because objectType is allowed to take three different forms in AS 2.0 (a simple token, an absolute IRI, or an object).

2. The "objectType" and "verb" properties really ought to be defined as "@type":"@id", however, because both allow for simple string token values (e.g. "post", "note", etc), mapping as "@type":"@id" can cause strange things to happen. So, for now, these are mapped as untyped terms.

An extended example:

```json
{
  "@context": "https://w3id.org/activity-streams/v2",
  "actor": {
    "objectType": "person",
    "displayName": "Joe"
  },
  "verb": "post",
  "object": {
    "id": "http://example.org/cars/for-sale#tesla",
    "objectType": "http://purl.org/goodrelations/v1#",
    "displayName": "Used Tesla Roadster",
    "content": "Need to sell fast and furiously",
    "gr:hasBusinessFunction": "gr:Sell",
    "gr:acceptedPaymentMethods": "gr:Cash",
    "gr:hasPriceSpecification": {
      "gr:hasCurrencyValue": "85000",
      "gr:hasCurrency": "USD"
    },
    "gr:includes": {
      "@type": [
        "gr:Individual",
        "pto:Vehicle"
      ],
      "gr:name": "Tesla Roadster",
      "foaf:page": "http://www.teslamotors.com/roadster"
    },
    "@context": {
      "gr": "http://purl.org/goodrelations/v1#",
      "pto": "http://www.productontology.org/id/",
      "foaf": "http://xmlns.com/foaf/0.1/",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "foaf:page": {
        "@type": "@id"
      },
      "gr:acceptedPaymentMethods": {
        "@type": "@id"
      },
      "gr:hasBusinessFunction": {
        "@type": "@id"
      },
      "gr:hasCurrencyValue": {
        "@type": "xsd:float"
      },      
      "displayName": "gr:name",
      "content": "gr:description",
      "objectType": "@type"
    }
  }
}
```

Yields:

```
<http://example.org/cars/for-sale#tesla> <http://purl.org/goodrelations/v1#acceptedPaymentMethods> <http://purl.org/goodrelations/v1#Cash> .
<http://example.org/cars/for-sale#tesla> <http://purl.org/goodrelations/v1#description> "Need to sell fast and furiously" .
<http://example.org/cars/for-sale#tesla> <http://purl.org/goodrelations/v1#hasBusinessFunction> <http://purl.org/goodrelations/v1#Sell> .
<http://example.org/cars/for-sale#tesla> <http://purl.org/goodrelations/v1#hasPriceSpecification> _:b2 .
<http://example.org/cars/for-sale#tesla> <http://purl.org/goodrelations/v1#includes> _:b3 .
<http://example.org/cars/for-sale#tesla> <http://purl.org/goodrelations/v1#name> "Used Tesla Roadster" .
<http://example.org/cars/for-sale#tesla> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://purl.org/goodrelations/v1#> .
_:b0 <http://activitystrea.ms/2.0/actor> _:b1 .
_:b0 <http://activitystrea.ms/2.0/object> <http://example.org/cars/for-sale#tesla> .
_:b0 <http://activitystrea.ms/2.0/verb> "post" .
_:b1 <http://activitystrea.ms/2.0/displayName> "Joe" .
_:b1 <http://activitystrea.ms/2.0/objectType> "person" .
_:b2 <http://purl.org/goodrelations/v1#hasCurrency> "USD" .
_:b2 <http://purl.org/goodrelations/v1#hasCurrencyValue> "85000"^^<http://www.w3.org/2001/XMLSchema#float> .
_:b3 <http://purl.org/goodrelations/v1#name> "Tesla Roadster" .
_:b3 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://purl.org/goodrelations/v1#Individual> .
_:b3 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.productontology.org/id/Vehicle> .
_:b3 <http://xmlns.com/foaf/0.1/page> <http://www.teslamotors.com/roadster> .
```