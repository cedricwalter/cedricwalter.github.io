---
title: 'mappings between Java bean types with MapStruct like a pro!'
date: '2021-02-26T19:57:44+01:00'
type: posts
summary: "MapStruct is a code generator that greatly simplifies the implementation of mappings between Java bean types based on a convention over configuration approach. The generated mapping code uses plain method invocations and thus is fast, type-safe and easy to understand."
tags:
    - bean
    - mapping
categories:
  - Developer
---
[MapStruct](https://mapstruct.org/) is a code generator that greatly simplifies the implementation of mappings between Java bean types based on a convention over configuration approach. The generated mapping code uses plain method invocations and thus is fast, type-safe and easy to understand.

MapStruct is an annotation processor which is plugged into the Java compiler and can be used in command-line builds (Maven, Gradle etc.) as well as from within your preferred IDE.

Multi-layered applications often require to map between different object models (e.g. entities and DTOs). Writing such mapping code is a tedious and error-prone task. [MapStruct](https://mapstruct.org/) aims at simplifying this work by automating it as much as possible.

In contrast to other mapping frameworks [MapStruct](https://mapstruct.org/) doesn’t use reflection at runtime! but generates bean mappings at compile-time which ensures a high performance, allows for fast developer feedback and thorough error checking.

The following mapper example demonstrate some of the most useful features

```java
@Mapper(imports = { LocalDateTime.class, LocalDate.class, UUID.class },
        uses = { AMapper.class,
                 BMapper.class},
        unmappedTargetPolicy = ReportingPolicy.ERROR)
// ReportingPolicy.ERROR useful to never forget to map a
// properties in @MappingTarget, at compile time it
// will failed with a compilation error
public abstract class  {

 @Inject PersonMapper personMapper;

 // since UUID added to imports = {}
 @Mapping(target = "uuid", expression= "java(UUID.randomUuid())")
 // if you don't add UUID to imports = {}
 @Mapping(target = "uuid", expression= "java(java.util.UUID.randomUuid())")
 // normally you don't need to add these lines, mapstruct will
 // map both fields automatically
 // but since my mapping method has 3 parameters, you need to
 // append the source, here child.name
 @Mapping(target = "name", source = "child.name")
 @Mapping(target = "vorname", source = "child.vorname")
 // if you don't want to map it to Adult target
 @Mapping(target = "age", ignore= true)
 // mapstruct detect the type of a, and
 // will use AMapper automatically, you just need to add it to
 @Mapping(target = "a", source = "child.value")
 // mappping required default values or type
 // conversion will invoke annotated method
 @Mapping(target = "birthday", source = "dbay", qualifiedBy="dateToLocalDate")
 public abstract void mapChildToAdult(Child child, Family family,
                      @MappingTarget Adult adult);

 // here for the sake of example, different classes but
 // same fields, no need to define anything
 public abstract void mapAddress(Address childAddress,
                                 @MappingTarget AdultAdress adultAddress);

 @AfterMapping // keep the same signature as mapChildToAdult()
 protected void assembleModel(Child child, Family family,
                              @MappingTarget Adult adult) {
  // after mapChildToAdult() is completed, mapstruct
  // will call this method automatically
  // yes if needed you can use mapping method with
  // not only a source and a target if needed.

  // you could validate the result in this method
  // or map some part of the @MappingTarget Adult
  mapAddress(familly,getAddress(), adult.getAddress());
  // or use another mapper
  personMapper.map(family, adult);
 }

 @Named("dateToLocalDate")
 dateToLocalDate(String value) {
  if (vaue == null) {
     return LocalDate.of(2000, 1, 1);
  }
  return date.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDate();
 }

}
```

Writing a java mapper to convert something to an ENUM is straightforward thanks to ValueMappings. Here is an example how to map form a string value to an Enum.

```java
@Mapper
public abstract class ColorMapper {
   @ValueMappings({
    @ValueMapping(target = "GREEN", source = "001"),
    @ValueMapping(target = "BLUE", source = "002"),
    // ...
    @ValueMapping(target = "UNKNOWN", source = MappingConstants.ANY_UNMAPPED)
   })
   public abstract Color mapString(String colorString);

   @InheritInverseConfiguration
   public abstract String mapEnum(Color color);

   // Validate String to ENUM mapping and log a LOW_ALARM in
   // case the string couldn't be mapped
   @AfterMapping
   protected void validate(String colorString, @MappingTarget Color color) {
    if (color== Color.UNKNOWN) {
      System.err.println("Invalid Color found: " + colorString);
    }
   }
}
```

You could also map Java Enumeration to Enumeration

```java
public enum OrderType { RETAIL, B2B, EXTRA, STANDARD, NORMAL }

public enum ExternalOrderType { RETAIL, B2B, SPECIAL, DEFAULT }

@ValueMappings({
    @ValueMapping(source = "EXTRA", target = "SPECIAL"),
    @ValueMapping(source = "STANDARD", target = "DEFAULT"),
    @ValueMapping(source = "NORMAL", target = "DEFAULT")
 })
 ExternalOrderType orderTypeToExternalOrderType(OrderType orderType);
```
