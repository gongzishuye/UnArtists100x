import json
import copy
from collections import OrderedDict

users = """
Mocca	clbupt@126.com
Tom	1747845742@qq.com
Perry	1843573024@qq.com
King	1160123318@qq.com
Dob6y	13456993881@163.com
Luffy	1443567312@qq.com
Murphy	18810967996@163.com
Oscar	1007470482@qq.com
Merku	kunkkahk@googlemail.com
Chris	wennery@qq.com
"""

def gen_json():
    file_path = '/Users/faria/Documents/artists100/artists10x/template.json'
    with open(file_path) as fr:
        metadata = json.load(fr)
    items = users.strip().split('\n')
    for idx, item in enumerate(items):
        tokens = item.split('\t')
        name = tokens[0]
        email = tokens[1]
        metacopy = copy.deepcopy(metadata)
        template = OrderedDict()
        template['name'] = metacopy['name']
        template['symbol'] = metacopy['symbol']
        template['description'] = metacopy['description']
        template['image'] = metacopy['image']
        template['attributes'] = metacopy['attributes']
        template['properties'] = metacopy['properties']

        template['name'] = template['name'].format(idx)
        template['image'] = template['image'].format(idx)
        template['attributes'][0]['value'] = name
        template['attributes'][1]['value'] = email
        template['properties']['files'][0]['uri'] = template['properties']['files'][0]['uri'].format(idx)
        with open('/Users/faria/Documents/artists100/artists10x/{}.json'.format(idx), 'w') as fw:
            json.dump(template, fw)


if __name__ == '__main__':
    gen_json()