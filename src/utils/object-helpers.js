
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
	return items.map(u => {
		if (u[objPropName] === itemId) { //если Id юзера совпадает
			return { ...u, ...newObjProps } //то подписываемся на него
		}
		return u;
	})
}
