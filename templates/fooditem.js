const foodItem= [
    {% comment %} food items add {% endcomment %}
    {% for product in products %}
    {
        id: {{product.id}},
        name: '{{product.name}}',
        category : '{{product.category}}',
        rating : {{product.rating}},
        price: {{product.price}},
        img: '{{product.img.url}}',
        quantity: 1
    },
    {% endfor %}
    ]

export {foodItem};