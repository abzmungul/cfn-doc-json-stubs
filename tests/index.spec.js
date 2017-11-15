'use strict';

const path = require('path');
const fs = require('fs-extra');
const index = require('../index');

describe('Index file has the right values', () => {
  test('S3 has the right values:', () => {
    expect(Object.keys(index.S3.Resources).sort()).toEqual(
      ['Bucket', 'BucketPolicy'].sort()
    );
    expect(Object.keys(index.S3.Models).sort()).toEqual(
      [
        'aws-properties-resource-tags',
        'aws-properties-s3-bucket-abortincompletemultipartupload',
        'aws-properties-s3-bucket-accelerateconfiguration',
        'aws-properties-s3-bucket-analyticsconfiguration',
        'aws-properties-s3-bucket-cors',
        'aws-properties-s3-bucket-cors-corsrule',
        'aws-properties-s3-bucket-dataexport',
        'aws-properties-s3-bucket-destination',
        'aws-properties-s3-bucket-inventoryconfiguration',
        'aws-properties-s3-bucket-lifecycleconfig',
        'aws-properties-s3-bucket-lifecycleconfig-rule',
        'aws-properties-s3-bucket-lifecycleconfig-rule-noncurrentversiontransition',
        'aws-properties-s3-bucket-lifecycleconfig-rule-transition',
        'aws-properties-s3-bucket-loggingconfig',
        'aws-properties-s3-bucket-metricsconfiguration',
        'aws-properties-s3-bucket-notificationconfig',
        'aws-properties-s3-bucket-notificationconfig-lambdaconfig',
        'aws-properties-s3-bucket-notificationconfig-queueconfig',
        'aws-properties-s3-bucket-notificationconfig-topicconfig',
        'aws-properties-s3-bucket-notificationconfiguration-config-filter',
        'aws-properties-s3-bucket-notificationconfiguration-config-filter-s3key',
        'aws-properties-s3-bucket-notificationconfiguration-config-filter-s3key-rules',
        'aws-properties-s3-bucket-replicationconfiguration',
        'aws-properties-s3-bucket-replicationconfiguration-rules',
        'aws-properties-s3-bucket-replicationconfiguration-rules-destination',
        'aws-properties-s3-bucket-storageclassanalysis',
        'aws-properties-s3-bucket-tagfilter',
        'aws-properties-s3-bucket-versioningconfig',
        'aws-properties-s3-websiteconfiguration',
        'aws-properties-s3-websiteconfiguration-redirectallrequeststo',
        'aws-properties-s3-websiteconfiguration-routingrules',
        'aws-properties-s3-websiteconfiguration-routingrules-redirectrule',
        'aws-properties-s3-websiteconfiguration-routingrules-routingrulecondition'
      ].sort()
    );
  });

  test('EC2 has the right values:', () => {
    expect(Object.keys(index.EC2.Resources).sort()).toEqual(
      [
        'Volume',
        'VolumeAttachment',
        'EIPAssociation',
        'EIP',
        'Instance',
        'SecurityGroupIngress',
        'SecurityGroup',
        'CustomerGateway',
        'DHCPOptions',
        'EgressOnlyInternetGateway',
        'FlowLog',
        'Host',
        'InternetGateway',
        'NatGateway',
        'NetworkAclEntry',
        'NetworkAcl',
        'NetworkInterfaceAttachment',
        'NetworkInterface',
        'PlacementGroup',
        'NetworkInterfacePermission',
        'RouteTable',
        'Route',
        'SpotFleet',
        'SecurityGroupEgress',
        'SubnetNetworkAclAssociation',
        'SubnetRouteTableAssociation',
        'Subnet',
        'SubnetCidrBlock',
        'VPCDHCPOptionsAssociation',
        'VPCGatewayAttachment',
        'VPCCidrBlock',
        'VPC',
        'VPCEndpoint',
        'VPCPeeringConnection',
        'VPNConnectionRoute',
        'VPNConnection',
        'VPNGateway',
        'VPNGatewayRoutePropagation'
      ].sort()
    );
    expect(Object.keys(index.EC2.Models).sort()).toEqual(
      [
        'aws-properties-ec2-blockdev-mapping',
        'aws-properties-ec2-blockdev-template',
        'aws-properties-ec2-instance-ssmassociations',
        'aws-properties-ec2-instance-ssmassociations-associationparameters',
        'aws-properties-ec2-mount-point',
        'aws-properties-ec2-network-iface-embedded',
        'aws-properties-ec2-network-interface-privateipspec',
        'aws-properties-ec2-networkaclentry-icmp',
        'aws-properties-ec2-networkaclentry-portrange',
        'aws-properties-ec2-networkinterface-ipv6addresses',
        'aws-properties-ec2-security-group-rule',
        'aws-properties-ec2-spotfleet-spotfleetrequestconfigdata',
        'aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications',
        'aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-blockdevicemappings',
        'aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-blockdevicemappings-ebs',
        'aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-iaminstanceprofile',
        'aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-monitoring',
        'aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-networkinterfaces',
        'aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-networkinterfaces-privateipaddresses',
        'aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-placement',
        'aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-securitygroups',
        'aws-properties-ec2-vpnconnection-vpntunneloptionsspecification',
        'aws-properties-resource-tags'
      ].sort()
    );
  });

  test('DDB has the right values:', () => {
    expect(Object.keys(index.DynamoDB.Resources).sort()).toEqual(
      ['Table'].sort()
    );
    expect(Object.keys(index.DynamoDB.Models).sort()).toEqual(
      [
        'aws-properties-dynamodb-attributedef',
        'aws-properties-dynamodb-gsi',
        'aws-properties-dynamodb-keyschema',
        'aws-properties-dynamodb-lsi',
        'aws-properties-dynamodb-projectionobject',
        'aws-properties-dynamodb-provisionedthroughput',
        'aws-properties-dynamodb-streamspecification',
        'aws-properties-dynamodb-table-timetolivespecification',
        'aws-properties-resource-tags'
      ].sort()
    );
  });
});
