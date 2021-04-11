import json

obj = dict()
obj['aa'] = 1
obj['bb'] = 2
print(obj)

obj = json.dumps(obj, ensure_ascii=False)
print(obj)
print(type(obj))

if type(obj) == str:
    print('struing ')


obj = json.dumps(obj, ensure_ascii=False)
print(obj)