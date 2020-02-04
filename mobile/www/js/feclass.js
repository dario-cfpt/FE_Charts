function getAvailableClassesForCharacter(char) {
    const availableClasses = [];

    feData.classes.forEach(feClass => {
        if (feClass.isAvailableForAll && (feClass.idGender == ID_GENDER_NON_RESTRICTED || feClass.idGender == char.idGender)) {
            availableClasses.push(feClass);
        } else {
            if (feData.restrictedClasses.find(x => x.idClass == feClass.id && x.idCharacter == char.id)) {
                availableClasses.push(feClass);
            }
        }
    });
    return availableClasses
}